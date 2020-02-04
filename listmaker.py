import json

lineList = [line.rstrip('\n') for line in open("domains.txt")]
lineObj = [{lineList[x]: 1} for x in range(len(lineList))]
lineStr = str(lineObj)
lineStr1 = lineStr.replace("{", "")
lineStr2 = lineStr1.replace("}", "")
print(lineStr2)
#json_list = json.dumps(lineList)

text_file = open("out2.txt", "w")
text_file.write(lineStr2)
text_file.close()
