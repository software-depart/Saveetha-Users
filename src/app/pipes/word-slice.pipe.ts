import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordSlice'
})
export class WordSlicePipe implements PipeTransform {

  transform(value: string, words: number): string {
    if (!value) return '';
    
    const wordArray = value.split(' ');
    const slicedWords = wordArray.slice(0, words);
    
    return slicedWords.join(' ');
  }

}
