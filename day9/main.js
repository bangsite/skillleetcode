const TimeLimitedCache = function () {
    // this.caches = {};
    // this.caches.count = 0;

    this.caches = new Map();
    console.log('caches map:::', this.caches);
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    console.log('this caches 1:::', this.caches);
    const check = this.caches.has(key);
    console.log('check:::', check)
    if (check) {
        clearTimeout(this.caches.get(key));
        console.log('this caches 2', this.caches);

    }
    // this.caches[key] = {};

    this.caches.set(key, {
        value,
        expired: setTimeout(() => this.caches.delete(key), duration)
    })

    console.log('this caches 3', this.caches);

    return check;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.caches.has(key)) {
        return this.caches.get(key).value;

    }
    return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.caches.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
const timeLimitedCache = new TimeLimitedCache()
// timeLimitedCache.set(1, 42, 1000); // false
// timeLimitedCache.get(1) // 42
// timeLimitedCache.count() // 1
console.log(timeLimitedCache.set(1,   100 , 1000))
console.log(timeLimitedCache.get(1))
console.log(timeLimitedCache.count())
