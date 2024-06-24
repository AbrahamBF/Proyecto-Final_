from django.db import models

class Brand(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    shop = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class ComponentPC(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=3, default=0.000)
    description = models.TextField(null=True)

    def __str__(self):
        return self.name