import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from '../../assets/mockdata/albums/index';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  audio: HTMLAudioElement | null = null;
  isPlaying: boolean = false;
  albumData: any = albums;
  data: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private player: PlayerService) {
  }

  ngOnInit() {
    console.log('alubmdata', this.albumData)
    const title = this.activatedRoute.snapshot.paramMap.get('title');
    console.log('title', title);
    if (title) {
      const decodedTitle = decodeURIComponent(title);
      this.data = this.albumData[title];
      console.log('data', this.data);
     
    }
  }
  openAlbum(album: any) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/album/${titleEscaped}`);
    console.log('v', `${titleEscaped}`)
  }

  dasherize(string: any) {
    return string.replace(/[A-Z]/g, function (char: any, index: any) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };



  togglePlayback() {
    this.isPlaying = !this.isPlaying;

    if (this.data && this.data.audioUrl) {
      console.log('audio', this.data.audioUrl);

      if (this.isPlaying) {
        this.audio = new Audio(this.data.audioUrl);
        console.log('Audio element:', this.audio);
        this.audio.play().then(() => {
          console.log('Audio playback started');
        }).catch((error) => {
          console.error('Error playing audio:', error);
        });
      } else if (this.audio) {
        this.audio.pause();
      }
    } else {
      console.error('No audio URL found in data:', this.data);
    }
  }
  currentAudio: HTMLAudioElement | null = null;
  playAudio(item: any) {
    this.isPlaying = !this.isPlaying;
    if (this.currentAudio) {
      this.currentAudio.pause();
    }
    const audioElement = new Audio(item.audiourl);

    audioElement.addEventListener('timeupdate', () => {
      item.currentTime = audioElement.currentTime / 60;
    });
    audioElement.addEventListener('ended', () => {
      item.isPlaying = false;
      item.currentTime = 0;
      audioElement.currentTime = 0;
    });

    audioElement.play();
    item.isPlaying = true;

    this.currentAudio = audioElement;
    // const object = this.data;   
    //  this.player.pushToRecentlyPlayed(object);
    console.log('audio', this.currentAudio)
  }
  pauseAudio(item: any) {
    this.isPlaying = !this.isPlaying;
    if (this.currentAudio) {
      this.currentAudio.pause();
    }
    item.isPlaying = false;
  }

}