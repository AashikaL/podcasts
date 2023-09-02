import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('seekInput') seekInput!: ElementRef;

  audioElement!: HTMLAudioElement;


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
  }, {
    color: 'green'
  }, {
    color: 'red'
  }]


  items: any[] = [
    {
      images: '../assets/podcasts/albums/crime.jpg',
      resume: 'Resume . 2D AGO',
      title: 'Chai & Chithi 15',
      description: 'Welcome to Chai and Chithi, a segment where we take fan stories mailed in to us, as well as share so..',
      color: 'brown',
      audiourl: "../assets/hukum.mp3",
      isPlaying: false,
      currentTime: 0,
    },
    {
      images: '../assets/podcasts/albums/mahabratham.jpg',
      resume: 'Resume . S1, E2',
      title: 'Mahabharata Episode',
      description: 'Welcome to Chai and Chithi, a segment where we take fan stories mailed in to us, as well as share so..',
      color: 'green',
      audiourl: "../assets/hukum.mp3",
      isPlaying: false,
      currentTime: 0,
    },
    {
      images: '../assets/podcasts/albums/ben.jpg',
      resume: 'Resume . 21 AUG',
      title: 'Lakhan Jathani and Nikhil Menon (Mizu lzakay)',
      description: 'On this episode of Food From Here and There, I take to Japan with Lakshan Jethani...',
      audiourl: "../assets/hukum.mp3",
      color: 'red',
      isPlaying: false,
      currentTime: 0,
    },
    {
      images: '../assets/podcasts/albums/humberman.jpg',
      resume: 'Resume . 1 MAR',
      title: 'Dr. Davind Linden: Life, Death & the Neuroscience of Your Unique Experience',
      description: 'In this episode, my guest is Dr. David',
      audiourl: "../assets/hukum.mp3",
      color: 'blue',
      isPlaying: false,
      currentTime: 0,
    },
  ];
  constructor(private router: Router, private sanitizer: DomSanitizer) {
  }

  openAlbum(album: any) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
    console.log('v', `${titleEscaped}`)
  }

  dasherize(string: any) {
    return string.replace(/[A-Z]/g, function (char: any, index: any) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };

  currentAudio: HTMLAudioElement | null = null;

  playAudio(item: any) {
    if (this.currentAudio) {
      this.currentAudio.pause(); // Pause the currently playing audio
    }

    // Create a new audio element for the selected item
    const audioElement = new Audio(item.audiourl);

    // Add timeupdate event listener to update progress
    audioElement.addEventListener('timeupdate', () => {
      item.currentTime = audioElement.currentTime / 60; // Convert seconds to minutes
    });

    // Add ended event listener to reset the player when audio ends
    audioElement.addEventListener('ended', () => {
      item.isPlaying = false;
      item.currentTime = 0;
      audioElement.currentTime = 0;
    });

    audioElement.play();
    item.isPlaying = true;

    // Set the currentAudio to the newly created audio element
    this.currentAudio = audioElement;
  }

  pauseAudio(item: any) {
    if (this.currentAudio) {
      this.currentAudio.pause();
    }
    item.isPlaying = false;
  }

  seekAudio(item: any, currentTimeInMinutes: number) {
    if (this.currentAudio) {
      this.currentAudio.currentTime = currentTimeInMinutes * 60;
    }
    item.currentTime = currentTimeInMinutes;
  }
}




