PGDMP                      |            library_management    17.2    17.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false                       1262    16551    library_management    DATABASE     �   CREATE DATABASE library_management WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Indonesian_Indonesia.1252';
 "   DROP DATABASE library_management;
                     postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                     pg_database_owner    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                        pg_database_owner    false    4            �            1259    16557    books    TABLE     �  CREATE TABLE public.books (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    published_year integer NOT NULL,
    stock integer DEFAULT 0 NOT NULL,
    isbn character varying(13) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.books;
       public         heap r       postgres    false    4            �            1259    16582 
   borrowings    TABLE     �  CREATE TABLE public.borrowings (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    book_id uuid,
    member_id uuid,
    borrow_date date NOT NULL,
    return_date date,
    status character varying(10) DEFAULT 'BORROWED'::character varying NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.borrowings;
       public         heap r       postgres    false    4            �            1259    16570    members    TABLE     v  CREATE TABLE public.members (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(15) NOT NULL,
    address text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.members;
       public         heap r       postgres    false    4                      0    16557    books 
   TABLE DATA                 public               postgres    false    217   x                 0    16582 
   borrowings 
   TABLE DATA                 public               postgres    false    219   �                 0    16570    members 
   TABLE DATA                 public               postgres    false    218   �+       j           2606    16569    books books_isbn_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_isbn_key UNIQUE (isbn);
 >   ALTER TABLE ONLY public.books DROP CONSTRAINT books_isbn_key;
       public                 postgres    false    217            l           2606    16567    books books_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.books DROP CONSTRAINT books_pkey;
       public                 postgres    false    217            r           2606    16590    borrowings borrowings_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.borrowings
    ADD CONSTRAINT borrowings_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.borrowings DROP CONSTRAINT borrowings_pkey;
       public                 postgres    false    219            n           2606    16581    members members_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.members DROP CONSTRAINT members_email_key;
       public                 postgres    false    218            p           2606    16579    members members_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.members DROP CONSTRAINT members_pkey;
       public                 postgres    false    218            s           2606    16591 "   borrowings borrowings_book_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.borrowings
    ADD CONSTRAINT borrowings_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.books(id);
 L   ALTER TABLE ONLY public.borrowings DROP CONSTRAINT borrowings_book_id_fkey;
       public               postgres    false    219    4716    217            t           2606    16596 $   borrowings borrowings_member_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.borrowings
    ADD CONSTRAINT borrowings_member_id_fkey FOREIGN KEY (member_id) REFERENCES public.members(id);
 N   ALTER TABLE ONLY public.borrowings DROP CONSTRAINT borrowings_member_id_fkey;
       public               postgres    false    4720    219    218               �  x��X�n����+j���Q�e��X�K�`�	�q��M:E����d�E��?�KRjid�`�j-����������W/?^�7�?�χ�6i��f ?4yC�flaC�a��u�|`�C��<�>�lH3�nCR�0�R7��9߿���|v�W䇓�s�Q MJ(���4j��׊��O6��'o��%����7�.65O�C��\ ���m����:����Y��	������̟J�5^:.���x����Z�輦�rI���F�՚G�B��<�@�Ø����##~�� 8���Ŗ\�1�:c��#&�k�rnE�x�
���S���ށ���>f�z��uc3.8|���ۛ�i7������
aW��9;		����U4��i(A�ѥ ^�sӥ���y�ŋБ絿���!!�'�UV	�&Nd�#dc�
9!P紧1eo|�F�y���+��pK���vV��6����>|i�n�x��4ë��86J*,�T)��Ȑ\�ŉ��Q4.��I_�@��ˬh��cb�3�q��Y\{����U�����(W+��t_��I-2�C�0��o���,�Ͱ@�ޢ�41B"Q�� 	謅�@m�*_�[�E���2��QG�}�W���:|]�P�-:˰h�{����	�ܚ�Щ�(��9�L�DPB*�������0��y_?�Dޥ�P��݂����J��cM�C&�*�(	u�Yʵ��e�����Ra�'o�����;�t��Z��Gp�`^���eU�ʒ�f��QJ�~˕��[T�8��o ���t�]�7�,9�f�B?N���)!ؚD�9���9�l.�yFP0�Z�x�n�M�I:/'���JA������)&�k�*���E��Vb%���d��r�q��ܻ95����|��ж�s(���h���K�"�eY�$� �r�Qǹ�ohD"`��#�j��8�IO~�6��q$?5�W��0�0�~d�UI�͚0aځ����iK]ISg�zɻ9t]�&	]&��v�MZjZ@7=;㒷��?JW�T�5��9b�NT�p��iP:�7b�KǾ^��%�ń�D����B���w�5��]�v�3_�}H{&�T�*o�;YP�Q���,�+Mr`UHG��hF�f$6���n�$2�*4�H_~9|��Ϻ���qO��+�Ƅ�Κ�1��rVb:u1����r,�gm�çf�;�e8�=fRh����sO#��\�U�2�)�35vrݔ#���T� ������-�m��<B/j������sbؑ�P���i�INEWB%_8�%i�VT��N��Q��������<��K.�̳��;얭�e�JU��ֿm��0s���f[!g�;?
�̡�'
3<c4Y����YK-�����n�w�����и�q������)���n�����{���b�PB�`-�愧��ښ9j|�撚+֏_�{��~շ�xX�w�
�6�b��ۿy������<&Ft��'>���Ϟ��'lw         h  x��]]�$ב|ׯ�o�a�%�|f�>yY=����(�|�kˌF������Vk���Et�!�o��tGGfDdV����?~��7O���WO�������������_����ﾟ���?��w�����}����3�w�ޮWOo�۟���ݓ��۟~|�4�,<����WO?�u�{�������~�ǧ�}*5n�#ͼC�yKD��f�y,���WO��F3�5�JC�*A�[�Bܛ���י�n��$y�4�z'�	�䯋s`�?���o��������G"�{��u��I�S���W����>��a��u�a�:C&[Aw�!U�%�64�-�{��� �!�2C/e-������u�9SO��r�le+��m�E��p�w��e����f<���
��6�k�<F�ZcX���N!��A�к�d6���_GRh�	�V5pU5X�=���{���;�&z��&n�z.u���D/(=�n�(/���S��f* 1���=zF�M�*WG��v���Bޑ���C�}�l��%w�z���/���������꿮�f���P��#��k%P�gI��ҕ�O�J)]h����uR(�{6���Jq��m�!k.AW�0�J�&��T��,/	M�t��R�,Z���
�a�}p��I��W�	暫N���JX��>��C�t�^M:�ln���ѦH�T�{�wh֟�C�T��V�(�,�:	��N@U�bo�����9%�u�Pkh
�2ضX!�������b-rh�i�ri���2�,o��o����і�5�OT|��*
v���F�z�R��K3��Y��v	����~sZd�Ɓ�/�1��5t|G(��r�QJ��x��hy`X�p�R�P�t�����M⍣�7Y��d�9�A;l�#@�l�ƍ����@T�s�p0�{J�}�4�z�3��N�V�;'|�,)�΄J4!X#���1N� ��Pbf�D��>�Vݩ���A�����@`Љ�%Ʋy)���W�G���(�i���	�hA+@�_^ys単�u���:;E����oe�-�hh�LBi#TeHT�~4I��S����%q釵�*m�Kh��{��+Y�ķ���t 2B*��cGG��R�*�ت�u
��h��D����i*�ܡ�̄l4Zao��3^J[kaWc6ӼۍS��ּB�L�o5(#
$4�,[������E�Z@������ƌ^��pL/��5K�W����C��so`i���W�:��c�7|�r�'��s��Ճ�s��T.A�	��p]#�8Hu��w����hc�"ZN"�R%��F��v>���R6�
!�{�'���iewĢr�ކx҆�f�r�UX+�6�^w���̔��ҹ��<1v>��(� �k>�;���8~	��#�o���>�ě�đ
�Z�@Tp~��҂���J>(�C��B2S�T:�\	?��'�;j��;�-�~p4�ի��	<aƁĊ�ʥ�D����X���IF�w w���+ib$�V��L/��c�]d1>{6��S�u��)D+:���?�ف:�Į��$����u)��V�K����HY�^�MyIhNH����+�(����Ȯ���Ȅ�{��\�J�<ح�:� ���z��@3��Ea��F��<ڽƿ��T�І������GK`�y����M��.rZ¸�����8��If�r�L[�^-@\����i�����f�S#��{~!YI{N��k� T���ҍ��C�?ϞI��@7�},����Q�:������H��c�v�=�P��ƽq���u��'[�9־Tϳg�����qp(��z�|�-��i�r�D�3]M!#$������lmﭷ���{�+�9���k`�z��s�9�ꑙn����.�ꊱ��@6wR��AT]R��һ	���LW@Sw/k���"�ÇÄ��z٪����ϳg��;.1�ːt��Wp]	;)|�=��I�g��9�Y�8}��9���i ��N�U*Zo.�4{�+�J�kL݂�<2�O��,�yN��#i>|�t	4�g�ਟ����YRЬs�R����왮�*
�,5,%��=�`uGi�q˭6�g����/��@DrA�+��d���	����=�P]��,�g�Qq���T>p�V��6#��3]ͤ�mB�6���=�Q9�f/��{��3]U�iU�q����@E�I��a���?~�t4A���`|憾�|�G+"��&*P�t;c��{�+�	�i:�JVw:�I�`���$ۼ9���&���34���n�>�ԇh��Q��y�LW@uhY09暐�$n�$��:��������왘�sM��}�sJ���Ar�s�}�R��Jz#�@�4{�K�Jl���u(�R^ܢ<\UE_l#Ɂ�i�L�@�cg!�	
���� �"�D���3��֣�L�@S��:ߏ���)x����@U��{�k��Pc]���ܼ�ָ�Z�Ь��GO�g��袌0-Ϟ#j_*t�:�"��Y��{�K��J��� Uhx��4�-�enp��g�t	T�����wP���L�"�q��3]M���am�'�3�%`ˎ�
�t��i�L�@U��QyCt���>P��Uzι�q�z����.�fɖv�<��9��8<="��Mj��N�g���ЁT�2�4W8Num���h�������h*:]ʰ�1f�$ɧG�o[M���oh�e�t	Ti%�th�D�G��k��{�A�f�p��3]M؟N���(n��m�]l������i�L�@՚�5L�?��qh3UAt�v;��{�K�IF0��"Y.|�����"�@c�����Ї�.��0�BQX�8�%#�!�]`t��o{���.��I���ԣ#��dq�0��Ґ>εg���pGH��p��n�`CO�Eng��iϤ���_%����EB$q��|�\
�}DO1β#����3�Ώ�6�������<a�u���I�s]�t	T[��hp~u�B�z�P�����4�{��97j��>p����37�Zl�qT��L�G323uX�5�s���ߨu.	J��i�t~T�����e���5(���m��R��)�{��9�l#�u"ݣ�E�3���ɖ-^�n��3�Ώ*��)V�z����Ps�������<>��L�G�(͑��B]���e8{:	�Չ<�t�=��Q��m��
蔑��h�PvVI�`�9�w	4��ٯ���w�p�����Gy��֟h�t~T����Y�6��P�d9,E�4Z�7N�g:?�2k� d�T���,���d����6o���Ώ���� ���9��)��\V��x��.�f�U�7>��YQ��,��k������)9Ӟ����6�'"%*Z/�BjҲ�PR>�:Þ�h����:�#�}���j	`tY$�b<͞��h�%T����w��h�k��L�E���ۜa�t~4�:�Q=.`�z�_y#<BCCܐ��ns�3�Ώj!�\��4~g�����D�5��x��잉���<���q�a����j֡I���C��*�'.�sy����C�=��XDU9�21����gǗ�v���=�Zsbiy���{ShE�V������)���˯���c��0{��k�[�qB��������>�����h�u���q���BEE#XԒ���h�]�;?4��$�������&����E�Yޫ�z,/�#���6�N3�H���%��CZ���Ac^�k�������C>7<CFRG�<R�oa��"�-��,c~Դ���3����?t��g���f-3K���-�=�놆��q��O<��,�:鳶y�����z(r�"�$�&��Vw����o�B����OT�I����C��ۨ}kEZ�w�l�u5�@Suv���cp���In��'�Ȇ��l6×6��X�u:���:?��� v1Æ         m  x��X[O�~���7�#ѣ�_ȋ[�s86r,�%����Π����T���,���"�f��]�T}�U�r���|�r���݇��Mބ<o�/C:"#l���G䮟F� �9o�G$�v9�vG��.=��J�89�ǧ+��{p% ㎖�8U��4�J�,q#������|�r}���.M�C۴�Ӧz��B*m���h��a��}6��S0�(�K�8��X��	�����_����OBq�X����*�2���f�)g��c&W�a�7(�����6���pKN�P�����`N�"�"���J�� E���R=��;�HM���b�������6>�ŀ@^�Q��kX��F$�e��2UE0
�*C(.YJng��G�#`���:��{�h�%'�֛V)��<ݯ��F�0�s��&U^i�a4�,�a1(�C�!�������х���j��;�֙|����a����;lL|.��4he�
�
�9����4��W0CO>����c[�.�ţ��%g9�L�G$��~<t:�E9��Sk���'O���Jt�Is�B������7�~�^�\Yr:̱_��j��6��Km�H��Р�¥TV�m�П6���\��z���������0ڑ���>�� ��0�����K`���L�*;N�f����Q�j�$r2&�wI�T=�Ť�&�''۾5��<��n��d0�2�P,�80F}�
�Z]x���z��a亟6�d��+�[�U�|��x�#g��e^ӁK���c�X�r�J%�t�#-c\�T��[�d�f1��m���><XӦNr�cZ<6B=��6�c{1�����q�$��(�Q��du��q(y&��a�ě'�~NeM�z#��i��O<�a#bpoP����`�I������Q>Lw���ynA����{�h�kON3ąB�r�-�|��0쪒1I3Hl4�[��&G!Dd�G޺����l�m���]܋ǢQ5J�	���cކ$�����ʂ�Cq��(B<�c�l��ǌ�ԅD�&S]��Hө�8r9<`jU��t��`dњbF�.s)�`e�.E
��g��(��
s�Y�WW���~���6�q�HÕ�,J�"��3�22�).J`V���"d��	������{i�5'_c�����[Qh�����
B�v�J�(��Zn� P�` &���~)��'�+�4~�Z�Sxl��F�Z�i�p*\A`$��#��l��J�J��f�滞����ڬ��ޛ"������5�� �lV�g��Y��@�@��ؐ�5
Z�ℌ��0��96��݋G��\jr1ͻ�M_�1�eQ,�kq���P�#������K'[\W�qh�?>?�~@ �K	���4��$�+y�U'0���՟��yMrOe�J�4�¨՞SQ��9���Ĝ��Eخ~���[.����Et����-�|
@��GyU)@p�>paK䀪i�q�������2Z���n�v�?%��"�K{�d��1n��ϯp��� T$�Yc+�bR�g��F��c�oZ�nS*/�Z0)�fYǿ�/��1W�����?���P9Z���8s!={ZE���kg�~lW���?<B?M���a+)USϹ�V���8V�3˽־%��ݻ� ��)_     