def count_evens(nums):
  return len(list(filter(lambda x: x % 2 == 0, nums)))

def big_diff(nums):
  return max(nums) - min(nums)

def centered_average(nums):
  return (sum(nums) - min(nums) - max(nums)) // (len(nums) - 2)

def sum13(nums):
  s = 0
  for i in range(len(nums)):
    if nums[i] != 13 and not (i and nums[i - 1] == 13): s += nums[i]
  return 

def sum67(nums):
  flag = True
  sm = 0
  for x in nums:
    if x == 6:
      flag = False
    if flag:
      sm += x
    elif x == 7:
      flag = True
  return sm

def has22(nums):
  for i in range(1, len(nums)):
    if nums[i - 1] == nums[i] == 2: return True
  return False