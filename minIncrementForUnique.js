/**
 * 945. Minimum Increment to Make Array Unique
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    let max = 0;
    let extra = 0;
    let moves = 0;

    max = Math.max(...nums);

    let freq = new Array(nums.length + max).fill(0);

    for(let i = 0; i < nums.length; i++) {
        freq[nums[i]] += 1;
    }

    for(let i = 0; i < freq.length; i++) {
        if(freq[i] <=1 ) {
            continue;
        }

        extra += freq[i] - 1;
        freq[i] = 1;
        freq[i + 1] += extra;
        moves += extra;

        extra = 0;
    }

    return moves;
};
