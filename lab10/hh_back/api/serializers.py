from rest_framework import serializers
from api.models import Vacancy, Company

class VacancySerializer(serializers.ModelSerializer):
    name = serializers.CharField()

    class Meta:
        model = Vacancy
        fields = ('id', 'name','salary', 'company')

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    
    def create(self, validated_data):
        company = Company.objects.create(name=validated_data['name'])
        return company
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance
