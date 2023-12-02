# sign_in/serializers.py
from rest_framework import serializers
from .models import FoodService, Participant, Driver, Location, AttendanceTracking, TransportationTracking

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = ('id', 'name', 'billing_type')

class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = ('id', 'name')

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('id', 'name')

class AttendanceTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = AttendanceTracking
        fields = '__all__'
        
class TransportationTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransportationTracking
        fields = ('id', 'driver', 'location', 'pickup_time', 'drop_off_time', 'error_flag')

class FoodServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodService
        fields = '__all__'      



