from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer

from posts.permissions import IsAuthorOfPost

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.order_by('-created_at')
    serializer_class = PostSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IsAuthorOfPost(),)

    def perform_create(self,serializer):
        instance = serializer.save(author=self.request.user)

        return super(PostViewSet,self).perform_create(serializer)

# Create your views here.

class AccountPostsViewSet(viewsets.ViewSet):
    queryset=Post.objects.select_related('author').all()
    serializer_class = PostSerializer

    def list(self,request,account_username=None):
        queryset = self.queryset.filter(author_username=account_username)
        serializer = self.serializer_class(queryset,many=True)

        return Response(serializer.data)
