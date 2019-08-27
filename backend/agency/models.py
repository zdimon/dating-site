from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Agency(User):
    name = models.TextField(max_length=250, help_text='Name of agency')
    location = models.CharField(max_length=250, blank=True)