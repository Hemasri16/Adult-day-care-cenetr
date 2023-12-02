# sign_in/views.py
from rest_framework import viewsets
from .models import FoodService, Participant, Driver, Location, AttendanceTracking, TransportationTracking
from .serializers import (
    FoodServiceSerializer,
    ParticipantSerializer,
    DriverSerializer,
    LocationSerializer,
    AttendanceTrackingSerializer,
    TransportationTrackingSerializer,
)

class ParticipantViewSet(viewsets.ModelViewSet):
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer

class DriverViewSet(viewsets.ModelViewSet):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class AttendanceTrackingViewSet(viewsets.ModelViewSet):
    queryset = AttendanceTracking.objects.all()
    serializer_class = AttendanceTrackingSerializer

class TransportationTrackingViewSet(viewsets.ModelViewSet):
    queryset = TransportationTracking.objects.all()
    serializer_class = TransportationTrackingSerializer

class FoodServiceViewSet(viewsets.ModelViewSet):
    queryset=FoodService.objects.all()
    serializer_class=FoodServiceSerializer

