# 2. Mantener tu rama actualizada con main !!!!!! Antes de empezar a trabajar cada día !!!! :

git checkout viktor   # o  git checkout mimi
git fetch origin
git merge origin/main

# 3. Hacer cambios y subirlos a tu rama Mimi

git add .
git commit -m "sección X tocada"
git push

# 3. Subir los cambios en main , no se hace a la vez cada uno debe actualizarse al main
git checkout main
git pull origin main
git merge viktor # o mimi
git push origin main