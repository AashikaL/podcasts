import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LatestEpisodesPage } from './latest-episodes.page';

describe('LatestEpisodesPage', () => {
  let component: LatestEpisodesPage;
  let fixture: ComponentFixture<LatestEpisodesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LatestEpisodesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
