const {
    containsDuplicate,
    containsDuplicate2,
    containsDuplicate3,
    containsDuplicate4,
} = require('./main');

describe('containsDuplicate functions', () => {
    const nums1 = [1, 2, 3, 1];
    const nums2 = [1, 2, 3, 4];
    const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const nums4 = [0];

    test('containsDuplicate returns true when duplicates exist', () => {
        expect(containsDuplicate(nums1)).toBe(true);
        expect(containsDuplicate(nums3)).toBe(true);
    });

    test('containsDuplicate returns false when no duplicates exist', () => {
        expect(containsDuplicate(nums2)).toBe(false);
        expect(containsDuplicate(nums4)).toBe(false);
    });

    test('containsDuplicate2 returns true when duplicates exist', () => {
        expect(containsDuplicate2(nums1)).toBe(true);
        expect(containsDuplicate2(nums3)).toBe(true);
    });

    test('containsDuplicate2 returns false when no duplicates exist', () => {
        expect(containsDuplicate2(nums2)).toBe(false);
        expect(containsDuplicate2(nums4)).toBe(false);
    });

    test('containsDuplicate3 returns true when duplicates exist', () => {
        expect(containsDuplicate3(nums1)).toBe(true);
        expect(containsDuplicate3(nums3)).toBe(true);
    });

    test('containsDuplicate3 returns false when no duplicates exist', () => {
        expect(containsDuplicate3(nums2)).toBe(false);
        expect(containsDuplicate3(nums4)).toBe(false);
    });

    test('containsDuplicate4 returns true when duplicates exist', () => {
        expect(containsDuplicate4(nums1)).toBe(true);
        expect(containsDuplicate4(nums3)).toBe(true);
    });

    test('containsDuplicate4 returns false when no duplicates exist', () => {
        expect(containsDuplicate4(nums2)).toBe(false);
        expect(containsDuplicate4(nums4)).toBe(false);
    });
});
