import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';


@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  listing: Listing
  name: string = ''
  description: string = ''
  price: string = '';

  constructor(private router: Router,
      private activeroute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activeroute.snapshot.paramMap.get('id');
    this.listing = fakeMyListings.find(list => list.id === id)
    this.name = this.listing.name
    this.description = this.listing.description;
    this.price = this.listing.price.toString();
  }

  onSubmit() {
    alert('Saving changes to the listing....')
    this.router.navigateByUrl('/my-listings')
  }
}
