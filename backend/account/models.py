from django.db import models

# Create your models here.

from django.contrib.auth.models import User
# Create your models here.

class Man(User):
    about_me = models.TextField(help_text='About me')
   

    
class Woman(User):
    about_me = models.TextField(help_text='About me')
