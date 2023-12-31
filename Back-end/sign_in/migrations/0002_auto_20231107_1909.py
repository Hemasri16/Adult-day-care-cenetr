# Generated by Django 3.2.21 on 2023-11-08 01:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sign_in', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='attendancetracking',
            name='breakfast_attendance',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='attendancetracking',
            name='lunch_attendance',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='attendancetracking',
            name='snack_attendance',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='FoodService',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('service_type', models.CharField(max_length=20)),
                ('pay_type', models.CharField(max_length=20)),
                ('attendance', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sign_in.attendancetracking')),
            ],
        ),
    ]
