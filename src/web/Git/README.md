---
title: Git操作 
---

| 代码                                             | 注释                     |
| ------------------------------------------------ | ------------------------ |
| git clone SSH地址                                | 克隆远程仓库代码         |
| git add .                                        | 暂存                     |
| git pull                                         | 拉取远程代码             |
| git push                                         | 提交给本地仓库           |
| git merge dev                                    | 合并分支代码             |
| git branch -d 分支名                             | 删除本地分支             |
| git push origin --delete 分支名                  | 删除远程分支             |
| git branch                                       | 查看本地分支             |
| git branch -a                                    | 查看本地和远程的所有分支 |
| git checkout -b dev                              | 创建分支 并切换分支      |
| git checkout  dev                                | 切换分支                 |
| git init                                         | 初始化本地仓库           |
| git status                                       | 查看代码修改情况         |
|                                                  | nothing                  |
|                                                  | modified                 |
|                                                  | new file                 |
|                                                  |                          |
| git reset --hard HEAD^                           | 回退上一个版本           |
| git reset --hard sassaffd                        | 回到记录的地方           |
| git reflog                                       | 查看所有时间点的日志     |
| git log                                          | 查看当前时间点之前日志   |
| git log --graph                                  | 图形化界面日志           |
| git log --graph --pretty=oneline --abbrev-commit | 简化版日志               |