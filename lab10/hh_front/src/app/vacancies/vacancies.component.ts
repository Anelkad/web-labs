import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  vacancies: Vacancy[] = []
  constructor(private vacancyService: VacancyService, 
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    console.log(productIdFromRoute);
    this.vacancyService.getVacancies(productIdFromRoute).subscribe((data)=>{
      console.log(data);
      this.vacancies = data;
    })
  }

  goBack(){
    this.location.back();
  }
}
