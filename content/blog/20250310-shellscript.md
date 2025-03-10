---
title: "我的第二篇博客"
date: 2024-03-06T12:00:00
draft: false
description: "测试博客文章"
type: "standard"
---

## [shell script]_ファイル一覧と行数をCSVファイルに出力する

```sh
#!/usr/bin/bash

#ファイルパスを指定する
filePath=$'H:/GitLab/fukushisource/fukushisource/SourceFiles/QAA/WebUI'
#行数を定義する（数値）
declare -i filelines=0
#出力結果を格納する変数を定義する
declare output=""
#改行を定義
LF=$'\n'
#フォルダを定義
folder=""
#ファイル名を定義
fileName=""
#拡張子を定義
expand=""

#フォルダ・ファイルごとに処理する
while read -r strpath; do

  #パスがファイルであるかを判定する
  if test -f $strpath;then
     #ファイル名を取得する
     fileName=`basename $strpath`
     #拡張子を取得する
     expand=${strpath##*.}
     #CS・ASPX・XMLファイルの場合のみ後続の処理を行う
     case "$expand" in 
        "cs" | "aspx" | "xml" |"CS" | "ASPX" | "XML" )
          #対象ファイルの行数を数える
          filelines=`sed -n '$=' $strpath`
          #count=$(wc -l $strpath)
          #1回目の場合
          if [ -z "$output" ];then
             output="$strpath,$folder,$fileName,$filelines"
          #2回目以降の場合
          else 
             output="$output$LF$strpath,$folder,$fileName,$filelines"
          fi
     esac
  else
     #パスの最後のディレクトリ名を抽出する
     #folder=`echo ${f} | awk -F "/" '{ print $NF }'`
     folder=`basename $strpath`
  fi
  

#サブディレクトリを見ない
#done < <(find ./hoge -mindepth 1 -maxdepth 1)
#サブディレクトリを見る
done < <(find $filePath -mindepth 1)

#出力結果をcsvファイルに書き込み
echo "$output" > output.csv

```
