
const data = {
    easy: {
      Array: {
        1: {
          title: 'Two Sum',
          problem: 'Find two numbers in the array that add up to the target.',
          code: `function twoSum(nums, target) {\n  const map = {};\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map[complement] !== undefined) {\n      return [map[complement], i];\n    }\n    map[nums[i]] = i;\n  }\n}`,
          algorithm: 'Hash Table',
          timeComplexity: 'O(n)',
          conclusion: 'This solution uses a hash map to store the indices of the numbers in the array, allowing for a fast lookup of the complement.',
          image: 'https://source.unsplash.com/featured/?array,code',
          instagram:'https://www.instagram.com/p/C76a4G6MVJ2/?img_index=1'
        }
      }
    },
    medium: {
      String: {
        2: {
          title: 'Longest Substring Without Repeating Characters',
          problem: 'Use sliding window technique to find the longest substring without repeating characters.',
          code: `function lengthOfLongestSubstring(s) {\n  let set = new Set();\n  let l = 0, res = 0;\n  for (let r = 0; r < s.length; r++) {\n    while (set.has(s[r])) {\n      set.delete(s[l]);\n      l++;\n    }\n    set.add(s[r]);\n    res = Math.max(res, r - l + 1);\n  }\n  return res;\n}`,
          algorithm: 'Sliding Window',
          timeComplexity: 'O(n)',
          conclusion: 'This solution uses a sliding window approach to find the longest substring without repeating characters, with a time complexity of O(n).',
          image: 'https://source.unsplash.com/featured/?string,code',
          instagram :'https://www.instagram.com/p/C-VFbWUy1__/?img_index=1'
        }
      }
    }
  };
  
  export default data;