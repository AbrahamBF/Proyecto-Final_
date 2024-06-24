from rest_framework import serializers
from .models import Brand, ComponentPC

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name', 'shop']

class ComponentPCSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComponentPC
        fields = ('id', 'name', 'brand', 'price', 'description')