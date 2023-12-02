# sign_in/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ParticipantViewSet,
    DriverViewSet,
    LocationViewSet,
    AttendanceTrackingViewSet,
    TransportationTrackingViewSet,
    FoodServiceViewSet,
)

router = DefaultRouter()
router.register(r'participants', ParticipantViewSet, basename='participant')
router.register(r'drivers', DriverViewSet, basename='driver')
router.register(r'locations', LocationViewSet, basename='location')
router.register(r'attendance-tracking', AttendanceTrackingViewSet, basename='attendance-tracking')
router.register(r'transportation-tracking', TransportationTrackingViewSet, basename='transportation-tracking')
router.register(r'food-service',FoodServiceViewSet,basename='food-service')

urlpatterns = [
    path('api/', include(router.urls)),
]
