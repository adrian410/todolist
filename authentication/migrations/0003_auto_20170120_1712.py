# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-20 16:12
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_auto_20170120_1643'),
    ]

    operations = [
        migrations.RenameField(
            model_name='account',
            old_name='is_staff',
            new_name='is_admin',
        ),
    ]
