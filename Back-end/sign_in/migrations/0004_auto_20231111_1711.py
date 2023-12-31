# Generated by Django 3.2.21 on 2023-11-11 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sign_in', '0003_remove_attendancetracking_error_flag'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='attendancetracking',
            name='sign_in_time',
        ),
        migrations.RemoveField(
            model_name='attendancetracking',
            name='sign_out_time',
        ),
        migrations.AddField(
            model_name='attendancetracking',
            name='location',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='attendancetracking',
            name='signin_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='attendancetracking',
            name='signin_time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='attendancetracking',
            name='signout_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='attendancetracking',
            name='signout_time',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
