# Generated by Django 5.0.6 on 2024-06-24 07:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0003_remove_componentpc_brand'),
    ]

    operations = [
        migrations.AddField(
            model_name='componentpc',
            name='brand',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='brands.brand'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='brand',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='componentpc',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]