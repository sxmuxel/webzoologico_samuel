import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { AnimalService } from '../../services/animal-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-component.html',
  styleUrls: ['./animal-component.css'],
})
export class AnimalComponent implements OnInit, OnChanges {

  animalList: any[] = [];

  constructor(
    private animalService: AnimalService,
    private cd: ChangeDetectorRef
  ) {}

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: any) => {
      this.animalList = data;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
    this.getAllAnimals();
  }

  ngOnChanges() {
    this.getAllAnimals();
  }
}