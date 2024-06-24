from django.http import HttpRequest
from django.shortcuts import render
from rest_framework import generics
from .models import Brand , ComponentPC
from .serializer import BrandSerializer , ComponentPCSerializer

class BrandList(generics.ListCreateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class BrandDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class ComponentPCList(generics.ListCreateAPIView):
    queryset = ComponentPC.objects.all()
    serializer_class = ComponentPCSerializer

class ComponentPCDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ComponentPC.objects.all()
    serializer_class = ComponentPCSerializer