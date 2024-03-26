import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'students-details-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbHighlight],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  filter : FormControl;

  students : Array<any> = [
    {
      "name": "John Doe",
      "city": "New York",
      "studentImage": "https://img.freepik.com/free-photo/portrait-hesitant-man-purses-lips-looks-bewilderment-feels-doubt_273609-16785.jpg",
      "state": "New York",
      "country": "USA",
      "physics": 85,
      "chemistry": 78,
      "maths": 90,
      "computer": 88
    },
    {
      "name": "Alice Smith",
      "city": "Los Angeles",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "California",
      "country": "USA",
      "physics": 80,
      "chemistry": 85,
      "maths": 92,
      "computer": 86
    },
    {
      "name": "David Brown",
      "city": "Chicago",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Illinois",
      "country": "USA",
      "physics": 75,
      "chemistry": 82,
      "maths": 88,
      "computer": 79
    },
    {
      "name": "Emma Johnson",
      "city": "Houston",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Texas",
      "country": "USA",
      "physics": 88,
      "chemistry": 90,
      "maths": 85,
      "computer": 91
    },
    {
      "name": "Michael Wilson",
      "city": "Philadelphia",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Pennsylvania",
      "country": "USA",
      "physics": 92,
      "chemistry": 85,
      "maths": 90,
      "computer": 87
    },
    {
      "name": "Sophia Lee",
      "city": "Phoenix",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Arizona",
      "country": "USA",
      "physics": 78,
      "chemistry": 80,
      "maths": 75,
      "computer": 80
    },
    {
      "name": "Daniel Martinez",
      "city": "San Antonio",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Texas",
      "country": "USA",
      "physics": 85,
      "chemistry": 87,
      "maths": 88,
      "computer": 82
    },
    {
      "name": "Olivia Garcia",
      "city": "San Diego",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "California",
      "country": "USA",
      "physics": 90,
      "chemistry": 88,
      "maths": 92,
      "computer": 85
    },
    {
      "name": "Ethan Rodriguez",
      "city": "Dallas",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Texas",
      "country": "USA",
      "physics": 82,
      "chemistry": 78,
      "maths": 80,
      "computer": 75
    },
    {
      "name": "Ava Hernandez",
      "city": "San Jose",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "California",
      "country": "USA",
      "physics": 85,
      "chemistry": 90,
      "maths": 88,
      "computer": 91
    },
    {
      "name": "William Lopez",
      "city": "Austin",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Texas",
      "country": "USA",
      "physics": 88,
      "chemistry": 85,
      "maths": 90,
      "computer": 87
    },
    {
      "name": "Mia Martinez",
      "city": "Jacksonville",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Florida",
      "country": "USA",
      "physics": 82,
      "chemistry": 78,
      "maths": 80,
      "computer": 75
    },
    {
      "name": "James Perez",
      "city": "Fort Worth",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Texas",
      "country": "USA",
      "physics": 90,
      "chemistry": 88,
      "maths": 92,
      "computer": 85
    },
    {
      "name": "Charlotte Young",
      "city": "Columbus",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Ohio",
      "country": "USA",
      "physics": 85,
      "chemistry": 87,
      "maths": 88,
      "computer": 82
    },
    {
      "name": "Benjamin Gonzales",
      "city": "San Francisco",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "California",
      "country": "USA",
      "physics": 90,
      "chemistry": 88,
      "maths": 92,
      "computer": 85
    },
    {
      "name": "Amelia Allen",
      "city": "Charlotte",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "North Carolina",
      "country": "USA",
      "physics": 85,
      "chemistry": 87,
      "maths": 88,
      "computer": 82
    },
    {
      "name": "Jacob Turner",
      "city": "Indianapolis",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Indiana",
      "country": "USA",
      "physics": 90,
      "chemistry": 88,
      "maths": 92,
      "computer": 85
    },
    {
      "name": "Harper Scott",
      "city": "Seattle",
      "studentImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CAU",
      "state": "Washington",
      "country": "USA",
      "physics": 85,
      "chemistry": 87,
      "maths": 88,
      "computer": 82
    },
    {
      "name": "Elijah Price",
      "city": "Denver",
      "studentImage": "https://example.com/student19.jpg",
      "state": "Colorado",
      "country": "USA",
      "physics": 90,
      "chemistry": 88,
      "maths": 92,
      "computer": 85
    },
];

constructor(private fb : FormBuilder){
  this.filter = this.fb.control("", { nonNullable : true});
}

}
