
����� ����
Git�� ��ġ�ϰ� ���� ���� ���� �ؾ� �ϴ� ���� ����� �̸��� �̸��� �ּҸ� �����ϴ� ���̴�. Git�� Ŀ���� ������ �� ������ ����Ѵ�. �� �� Ŀ���� �Ŀ��� ������ ������ �� ����:

git config --global user.name "x700"
git config --global user.email x700@paran.com


Git ����� �����

git init
echo # x700 >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/x700/x700.git
git push -u origin master



git add <���� �̸�>
git add *
git commit -m "�̹� Ȯ������ ���� ����"
git push -u x700 origin master
git remote add origin https://github.com/x700/x700.git



�߰��� Ȯ��(commit)
����� ������ �Ʒ� ��ɾ�� (�ε�����) �߰��� �� �־��.

git add <���� �̸�>
git add *

�̰��� �ٷ� git�� �⺻ �۾� �帧���� ù �ܰ迡 �ش�ſ�.
������ ������ ���� ������ Ȯ���Ϸ��� �Ʒ� ����� ������ �Ѵ�ϴ�.

git commit -m "�̹� Ȯ������ ���� ����"

��, ���� ����� ������ HEAD�� �ݿ��ƾ��.
������, ���� ����ҿ��� ���� �ݿ��� �� �ƴ�ϴ�.

���� ���� ����(push)�ϱ�
������ ���� ������ ���� ���� ������� HEAD �ȿ� �ӹ��� �־��.
���� �� ���� ������ ���� ������ �÷����ô�. �Ʒ� ����� �����ϼ���.

git push origin master

(�ٸ� ������ �����Ϸ��� master�� ���ϴ� ���� �̸����� �ٲ��ּ���.) 

���� ������ �ִ� ���� ����Ҹ� ������ ���� �ƴ϶��,
���� ������ �ּҸ� git���� �˷���� �ؿ�.

git remote add origin <���� ���� �ּ�>

���� ���� ������ ���� ������ ������ �� �־��.