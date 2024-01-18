import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordSlicePipe } from '../word-slice.pipe';
import { HighlightPipe } from '../highlight.pipe';

@NgModule({
  declarations: [WordSlicePipe,HighlightPipe],
  imports: [
    CommonModule
  ],
  exports: [
    WordSlicePipe,
    HighlightPipe
  ],
})
export class SharedPipesModule { }
