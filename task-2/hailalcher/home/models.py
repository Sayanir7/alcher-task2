from django.db import models
from django import forms
# Create your models here.


class Contact(models.Model):
    name=models.CharField(max_length=120)
    username=models.CharField(max_length=120, unique=True)
    # email=models.EmailField(max_length=120)
    email = models.EmailField(
        max_length=254,
       
        unique=True,
        
    )


    def __str__(self):
        return self.name
    