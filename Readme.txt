
사용자 정보
Git을 설치하고 나서 가장 먼저 해야 하는 것은 사용자 이름과 이메일 주소를 설정하는 것이다. Git은 커밋할 때마다 이 정보를 사용한다. 한 번 커밋한 후에는 정보를 변경할 수 없다:

git config --global user.name "x700"
git config --global user.email x700@paran.com


Git 저장소 만들기

git init
echo # x700 >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/x700/x700.git
git push -u origin master



기존 프로젝트를 Git으로 관리하고 싶을 때, 프로젝트의 디렉토리로 이동해서 아래과 같은 명령을 실행한다.
git init

Git 저장소 만들기

git add <파일 이름>
git add *
git commit -m "이번 확정본에 대한 설명"

파일의 상태 확인하기
git status

파일 무시하기 -  .gitignore 파일을 만들고 그 안에 무시할 파일 패턴을 적는다
cat .gitignore
*.[oa]
*~

변경사항 커밋하기
git commit
git commit -m "first commit"


파일을 삭제하기
git rm grit.gemspec

git push -u x700 origin master
git remote add origin https://github.com/x700/x700.git


기존 저장소를 Clone하기

git clone git://github.com/schacon/grit.git
git clone git://github.com/schacon/grit.git mygrit




추가와 확정(commit)
변경된 파일은 아래 명령어로 (인덱스에) 추가할 수 있어요.

git add <파일 이름>
git add *

이것이 바로 git의 기본 작업 흐름에서 첫 단계에 해당돼요.
하지만 실제로 변경 내용을 확정하려면 아래 명령을 내려야 한답니다.

git commit -m "이번 확정본에 대한 설명"

자, 이제 변경된 파일이 HEAD에 반영됐어요.
하지만, 원격 저장소에는 아직 반영이 안 됐답니다.

변경 내용 발행(push)하기
현재의 변경 내용은 아직 로컬 저장소의 HEAD 안에 머물고 있어요.
이제 이 변경 내용을 원격 서버로 올려봅시다. 아래 명령을 실행하세요.

git push origin master

(다른 가지를 발행하려면 master를 원하는 가지 이름으로 바꿔주세요.) 

만약 기존에 있던 원격 저장소를 복제한 것이 아니라면,
원격 서버의 주소를 git에게 알려줘야 해요.

git remote add origin <원격 서버 주소>

이제 변경 내용을 원격 서버로 발행할 수 있어요.