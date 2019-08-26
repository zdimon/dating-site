from django.db import models

# Create your models here.
class Page(models.Model):
    ''' Page model  '''
    title = models.CharField(max_length=250)
    