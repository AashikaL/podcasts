import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import might from '../../assets/podcasts/might.json';
import popular from '../../assets/podcasts/poplur.json';
import business from '../../assets/podcasts/business.json';
import busines from '../../assets/podcasts/busines.json';
import loving from '../../assets/podcasts/loving.json';
import Swiper from 'swiper';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  audio: HTMLAudioElement = new Audio();
  isPlaying: boolean = false;
  duration: number = 0;
  currentTime: number = 0;

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
loving = [{
  albums: loving,
  color: 'green'
},{
  color:'green'
},{
  color:'red'
}]


  items: any[] = [
    {
      images: '../assets/podcasts/albums/crime.jpg',
      resume: 'Resume . 2D AGO',
      title: 'Chai & Chithi 15',
      description: 'Welcome to Chai and Chithi, a segment where we take fan stories mailed in to us, as well as share so..',
      color: 'brown',
      audiourl:"../assets/hukum.mp3"
    },
    {
      images: '../assets/podcasts/albums/mahabratham.jpg',
      resume: 'Resume . S1, E2',
      title: 'Mahabharata Episode',
      description: 'Welcome to Chai and Chithi, a segment where we take fan stories mailed in to us, as well as share so..',
      color: 'green',
      audiourl:"https://wynk.in/u/hSC0f7832"
    },
    {
      images: '../assets/podcasts/albums/ben.jpg',
      resume: 'Resume . 21 AUG',
      title: 'Lakhan Jathani and Nikhil Menon (Mizu lzakay)',
      description: 'On this episode of Food From Here and There, I take to Japan with Lakshan Jethani...',
      color: 'red'
    },
    {
      images: '../assets/podcasts/albums/humberman.jpg',
      resume: 'Resume . 1 MAR',
      title: 'Dr. Davind Linden: Life, Death & the Neuroscience of Your Unique Experience',
      description: 'In this episode, my guest is Dr. David',
      color: 'blue'
    },
  ];
  constructor(private router: Router, private sanitizer: DomSanitizer ) {
    this.audio.src
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

  
  // Inside your component class
playAudio(item:any) {
  item.isPlaying = true; // Assuming you're updating the item's play state
  item.playbackInterval = setInterval(() => {
    if (item.currentTime < item.duration) {
      item.currentTime += 1; // Increment by 1 second (adjust as needed)
    } else {
      clearInterval(item.playbackInterval);
      item.isPlaying = false;
      // Handle playback completion
    }
  }, 1000); // Update every 1 second (adjust as needed)
}

pauseAudio(item:any) {
  item.isPlaying = false;
  clearInterval(item.playbackInterval);
}


  updateTime(): void {
    this.duration = this.audio.duration;
    this.currentTime = this.audio.currentTime;
  }

 
  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  seekAudio(item: any, time: number): void {
    if (!isNaN(time)) {
      this.audio.currentTime = time;
      item.currentTime = time; // Update the current time for the item
    }
  }
  getProgressBarWidth(item: any): string {
    const progress = (item.currentTime / item.duration) * 100;
    return progress + '%';
  }
}



