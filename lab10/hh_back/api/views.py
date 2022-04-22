import json
from .models import Company, Vacancy
from django.http.response import JsonResponse
from api.serializers import VacancySerializer, CompanySerializer
from django.views.decorators.csrf import csrf_exempt

#fbv
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response

#cbv
from rest_framework.views import APIView
from django.shortcuts import Http404
from rest_framework import status

@api_view(['GET', 'POST'])
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many = True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class CompanyListView(APIView):

    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many = True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return Response({'message': str(e)}, status=404)
    
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == 'DELETE':
        company.delete()
        return Response({'message': 'deleted'}, status=204)

class CompanyDetailView(APIView):
    def get_object(self, pk):
        try:
            return Company.objects.get(id=pk)
        except Company.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        company = self.get_object(pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, pk=None):
        company = self.get_object(pk)
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        company = self.get_object(pk)
        company.delete()
        return Response({'message': 'deleted'}, status=204)

def company_vacancies(request, company_id):
    try:
        vacancies = Company.objects.get(id=company_id).vacancy_set.all()
        serializer = VacancySerializer(vacancies, many = True)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(serializer.data, safe=False)

@api_view(['GET', 'POST'])
def vacancies_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many = True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == 'DELETE':
        vacancy.delete()
        return Response({'message': 'deleted'}, status=204)

def vacancies_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many = True)
    return JsonResponse(serializer.data, safe=False)