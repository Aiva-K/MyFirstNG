import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video, VideoResponse } from '../interfaces/video';

@Component({
  selector: 'app-videos',
  imports: [CommonModule],
  providers: [HttpClient],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {

  videoURL: string = 'https://hammerhead-app-4hcd6.ondigitalocean.app/api'
  localVideosArray:Video[] = [];
  constructor(private http:HttpClient, private sanitizer: DomSanitizer){

  }

  // Below is a function that lets an API run once you load a component/page
  ngOnInit(): void {
    console.log("Message during load");
    this.http.get<VideoResponse>(this.videoURL).subscribe(videos =>{
      console.log(videos.items);
      this.localVideosArray = videos.items;
      console.log('Local Array', this.localVideosArray);
    });
  }

  loadVideos(){
    // You call the API with .get command, but you have to specify in what format the items come in. In this case it's an array so you type <> and inside it you provide the shape.
    // Then you type what you are getting, in this case it's the videoURL string, you subscribe to it and put it all in the variable videos.
    // Only then you can call videos.items
    this.http.get<VideoResponse>(this.videoURL).subscribe(videos =>{
      console.log(videos.items);
      this.localVideosArray = videos.items;
      console.log('Local Array', this.localVideosArray);
    });
  }

  // I guess you need this thing in order to sanitize a video link?
  safeURL(vid:string){
    let url = 'https://www.youtube.com/embed/'+vid;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
