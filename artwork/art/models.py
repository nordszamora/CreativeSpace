from django.db import models

class Data(models.Model):
   email = models.EmailField(max_length = 404)
   password = models.CharField(max_length = 404)