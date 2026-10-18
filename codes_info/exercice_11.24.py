L = []                                      
# cré la liste vide à remplir apres

def palindrome(N) :
    for i in range(10**(N-1), 10**N):       
        # fais varier la valeur du premier facteur
        for j in range(i, 10**N):           
            # puis du deuxième
            p = i*j                         
            if str(p)==str(p)[::-1]:        
                # test si le str(p) du produit est égale au str(p) mais retourner
                # si p = 5326 alors str(p)="5326" et str(p)[::-1]="6235"
                L.append(p)
                # si oui on enregistre dans la liste
                # elle contiendra donc TOUS les palindromes
    return max(L)
    # renvoie le plus grand de la liste

N = int(input("palindrome :"))
# fais choisir N

print(f"Le plus grand palindrome fait du produit  de 2 nombres à {N} chiffres est : {palindrome(N)}") # appelle la fonction
# renvoie le résultat