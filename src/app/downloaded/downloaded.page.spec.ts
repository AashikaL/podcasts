import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DownloadedPage } from './downloaded.page';

describe('DownloadedPage', () => {
  let component: DownloadedPage;
  let fixture: ComponentFixture<DownloadedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DownloadedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
