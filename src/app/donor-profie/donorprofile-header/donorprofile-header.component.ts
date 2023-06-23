import { Component, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';



@Component({
  selector: 'app-donorprofile-header',
  templateUrl: './donorprofile-header.component.html',
  styleUrls: ['./donorprofile-header.component.css']
})
export class DonorprofileHeaderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Ensure the DOM is loaded before initializing Bootstrap dropdowns
    document.addEventListener('DOMContentLoaded', () => {
      const dropdownToggleList = Array.from(
        document.querySelectorAll('.dropdown-toggle')
      );
      dropdownToggleList.forEach((dropdownToggle) => {
        new bootstrap.Dropdown(dropdownToggle);
      });
    });
  }

}

