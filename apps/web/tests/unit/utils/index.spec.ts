import {
  formatJson,
  hasClass,
  addClass,
  removeClass,
  toggleClass,
} from '@/utils/index.ts';
import {
  instance,
  mock,
  verify,
  when,
  between,
  anyNumber,
  resetCalls,
  reset,
  capture,
  spy,
} from 'ts-mockito';
import { clearScreenDown } from 'readline';
// add:
describe('Utils:index', () => {
  let mockedHTMLElement: HTMLElement;
  let ele: HTMLElement;
  beforeEach(() => {
    mockedHTMLElement = mock(HTMLElement);
    when(mockedHTMLElement.className).thenReturn(
      'formClass mid-Class divClass',
    );
    ele = instance(mockedHTMLElement);
  });
  it(' formatJson', () => {
    const jsonData = [
      { a: 1, b: 'one', timestamp: '2018-10-10' },
      { a: 2, b: 'two', timestamp: '2018-10-11' },
    ];
    let filterKeys = ['a', 'timestamp'];
    console.log(formatJson(filterKeys, jsonData)); //=> [ [ 1, '2018-10-10 00:00:00' ], [ 2, '2018-10-11 00:00:00' ] ]
    filterKeys = ['c', 'timestamp'];
    console.log(formatJson(filterKeys, jsonData));
    // [
    //   [ undefined, '2018-10-10 00:00:00' ],
    //   [ undefined, '2018-10-11 00:00:00' ]
    // ]
  });

  it('hasClass', () => {
    mockedHTMLElement = mock(HTMLElement);

    // when(mockedHTMLElement.className).thenReturn('formClass mid-Class divClass')
    ele = instance(mockedHTMLElement);
    expect(hasClass(ele, 'mid-Class')).toBeTruthy();
    expect(hasClass(ele, 'formClass')).toBeTruthy();
    expect(hasClass(ele, 'ormClass')).toBeFalsy();
    // let mockedEle=mock<HTMLElement>()
    // let e=instance(mockedEle)
    // e.className='abcd'
    // console.log(addClass(e,'mid-Class'));
    // console.log(e);
    // const a=new HTMLElement()
    // console.log(a);
    // ele.className='abc'
    // console.log(ele);

    // const removeClass = (ele: HTMLElement, className: string) => {
    //   if (hasClass(ele, className)) {
    //     const reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    //     ele.className = ele.className.replace(reg, ' ')
    //   }
    // }
  });

  it('addClass', () => {
    //mock interface
    //mockedHTMLElement=mock(HTMLElement)
    mockedHTMLElement = mock<HTMLElement>();
    ele = instance(mockedHTMLElement);
    ele.className = 'formClass mid-Class divClass';
    addClass(ele, 'mid-Class');
    expect(ele.className).toBe('formClass mid-Class divClass');
    addClass(ele, 'mid2-Class');
    expect(ele.className).toBe('formClass mid-Class divClass mid2-Class');
  });

  it('removeClass', () => {
    //mock interface
    //mockedHTMLElement=mock(HTMLElement)
    mockedHTMLElement = mock<HTMLElement>();
    ele = instance(mockedHTMLElement);
    ele.className = 'formClass mid-Class divClass';
    removeClass(ele, 'mid2-Class');
    expect(ele.className).toBe('formClass mid-Class divClass');
    removeClass(ele, 'mid-Class');
    expect(ele.className).toBe('formClass divClass');
    removeClass(ele, 'divClass');
    expect(ele.className).toBe('formClass ');
  });

  // 空格处理得不够严谨
  it('toggleClass', () => {
    //mock interface
    //mockedHTMLElement=mock(HTMLElement)
    mockedHTMLElement = mock<HTMLElement>();
    ele = instance(mockedHTMLElement);
    ele.className = 'formClass mid-Class divClass';
    toggleClass(ele, 'mid2-Class');
    expect(ele.className).toBe('formClass mid-Class divClass mid2-Class');
    toggleClass(ele, 'mid2-Class');
    expect(ele.className).toBe('formClass mid-Class divClass ');
  });
});
