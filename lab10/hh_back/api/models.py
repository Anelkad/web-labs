from django.db import models
from django.db.models import CharField, FloatField, TextField
from django.db.models.fields.related import ForeignKey


class Company(models.Model):
    name = CharField(max_length=255)
    description = CharField(max_length=255)
    city = CharField(max_length=30)
    address = CharField(max_length=255)

    class Meta:
        verbose_name_plural = 'Companies'

    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    name = CharField(max_length=255)
    description = TextField()
    salary = FloatField(default=1000)
    company = ForeignKey(Company, default=1, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = 'Vacancies'

    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
        }

    def __str__(self):
        return f'{self.name} | {str(self.company)}'
