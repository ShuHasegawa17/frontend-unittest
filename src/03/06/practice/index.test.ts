describe('マッチャ−', () => {
  test('truthy', () => {
    expect(1).toBeTruthy();
    expect('1').toBeTruthy();
    expect(true).toBeTruthy();
    expect(0).not.toBeTruthy();
    expect('').not.toBeTruthy();
    expect(false).not.toBeTruthy();
  });
  test('falthy', () => {
    expect(1).not.toBeFalsy();
    expect('1').not.toBeFalsy();
    expect(true).not.toBeFalsy();
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(false).toBeFalsy();
  });
  test('null, undefined', () => {
    expect(null).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeFalsy();
    expect(undefined).toBeUndefined();
  });
  test('数値', () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toEqual(4);

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
  });
  test('小数計算', () => {
    //正確ではない
    expect(0.1 + 0.2).not.toBe(0.3);
    // 小数点以下2桁までで計算
    expect(0.1 + 0.2).toBeCloseTo(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3, 15);
  });
  test('文字列', () => {
    const str = 'さようなら太郎';
    expect(str).toBe('さようなら太郎');
    expect(str).toEqual('さようなら太郎');

    expect(str).toContain('さようなら');

    expect(str).toMatch(/なら太/);

    expect(str).toHaveLength(7);
  });
  test('配列', () => {
    const tags = ['a', 'b', 'c', 'd', 'e'];

    expect(tags).toContain('b');
    expect(tags).toHaveLength(5);

    const tags2 = ['f', 'g', 'h', 'i', 'j'];
    const tagsAll = [tags, tags2];
    expect(tagsAll).toContainEqual(tags);
    expect(tagsAll).toEqual(expect.arrayContaining([tags]));
  });

  test('オブジェクト', () => {
    const author = { name: 'hase', age: 38 };
    expect(author).toMatchObject({ name: 'hase' }); // 部分一致でOK
    expect(author).not.toMatchObject({ name: 'chisa' });

    expect(author).toHaveProperty('age');
  });
});
