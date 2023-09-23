from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=300, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False)
    owner = models.ForeignKey(User, related_name="todos", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title
