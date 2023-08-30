import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import might from '../../assets/podcasts/might.json';
import popular from '../../assets/podcasts/poplur.json';
import business from '../../assets/podcasts/business.json'
import busines from '../../assets/podcasts/busines.json'
import Swiper from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  might = [{
    albums: might
  }]

  popular = [{
    albums: popular
  }]
  business = [{
    albums: business
  }]
  busines = [{
    albums: busines
  }]


  items: any[] = [
    {
      images: '../assets/podcasts/albums/crime.jpg',
      autoDetails: 'Auto details 1...',
      title: 'Chai & Chithi 15',
      description: 'Welcome to Chai and Chithi, a segment where we take fan stories mailed in to us, as well as share so..',
      information: 'Additional information 1...',
      color: 'brown',
    },
    {
      images: '../assets/podcasts/albums/mahabratham.jpg',
      autoDetails: 'Auto details 2...',
      title: 'Mahabharata Episode',
      description: 'Welcome to Chai and Chithi, a segment where we take fan stories mailed in to us, as well as share so..',
      information: 'Additional information 2...',
      color: 'green',
    },
    {
      images: '../assets/humberman.jpg',
      autoDetails: 'Auto details 2...',
      title: 'Item Title 2',
      description: 'Item Description 2',
      information: 'Additional information 2...',
    },
    {
      images: '../assets/humberman.jpg',
      autoDetails: 'Auto details 2...',
      title: 'Item Title 2',
      description: 'Item Description 2',
      information: 'Additional information 2...',
    },
  ];
  constructor(private router: Router) {
    
  }

  openAlbum(album:any) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
    console.log('v',`${titleEscaped}`)
  }

  dasherize(string: any) {
    return string.replace(/[A-Z]/g, function (char: any, index: any) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };
}

