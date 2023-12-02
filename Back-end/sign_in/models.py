# yourapp/models.py
from django.db import models
from datetime import datetime, timedelta

class Participant(models.Model):
    name = models.CharField(max_length=100)
    billing_type = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Driver(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Location(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class AttendanceTracking(models.Model):
    participant = models.ForeignKey(Participant, on_delete=models.CASCADE)
    signin_date = models.DateField()
    signin_time = models.TimeField()
    sign_out_date = models.DateField(null=True, blank=True)
    sign_out_time = models.TimeField(null=True, blank=True)
    breakfast_attendance = models.BooleanField(default=False)
    lunch_attendance = models.BooleanField(default=False)
    snack_attendance = models.BooleanField(default=False)
    error_flag = models.BooleanField(default=False)


class TransportationTracking(models.Model):
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    pickup_time = models.DateTimeField()
    drop_off_time = models.DateTimeField()
    error_flag = models.BooleanField(default=False)

class FoodService(models.Model):
    attendance = models.ForeignKey(Participant, on_delete=models.CASCADE)
    service_type = models.CharField(max_length=20)  # Breakfast, Lunch, Snack, etc.
    pay_type = models.CharField(max_length=20) 
  