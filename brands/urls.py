from django import urls
from django.urls import path
from .views import BrandList, BrandDetail, ComponentPCList, ComponentPCDetail

urlpatterns = [
    path('brands/', BrandList.as_view(), name="brand-list"),
    path('brands/<int:pk>/', BrandDetail.as_view(), name='brand-detail'),

    path('componentPCs/', ComponentPCList.as_view(), name="component-list"),
    path('componentPCs/<int:pk>/', ComponentPCDetail.as_view(), name='component-detail'),
]