def double_char(str):
  return ''.join(x + x for x in str)

def count_hi(str):
  return str.count('hi')

def cat_dog(str):
  return str.count('cat') == str.count('dog')

def count_code(str):
  cnt = 0
  for i in range(len(str) - 3):
    if str[i:i+2] == 'co' and str[i+3] == 'e': cnt += 1
  return cnt

def end_other(a, b):
  a = a.lower()
  b = b.lower()
  return a[-len(b):] == b or b[-len(a):] == a

def xyz_there(str):
  return str.count('.xyz') < str.count('xyz')