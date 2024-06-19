import React from "react";
import CustomTag from "../../components/CustomTag";
import { SafeAreaView, ScrollView, View, Text } from "react-native";

const Article = () => {
  return (
    <SafeAreaView className="bg-primary w-screen h-full p-4">
      <ScrollView>
        <View className="border-b border-white pb-4 mb-2">
          <Text className="text-indigo-400 text-4xl font-bold text-center">
            <Text className="text-secondary">E</Text>Z
          </Text>
        </View>
        <View className="flex flex-row justify-between mb-12">
          <View className="m-2">
            <Text className="text-lg text-secondary">Cedric Friscia</Text>
            <Text className="text-white">14 novembre 1998</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <CustomTag name={"Rocket League"} />
          </View>
        </View>
        <View className="flex items-center">
          <Text className="text-white text-4xl font-bold font-plight text-center w-11/12 mb-4">
            La fin de fifa en 2026 !
          </Text>
          <Text className="text-white text-xl font-light w-11/12 leading-7 tracking-wide">
            Un Tournant Historique dans le Monde du Jeu Vidéo.{"\n"}
            {"\n"}
            <Text className="font-bold">
              Un Géant du Jeu Vidéo Tire sa Révérence
            </Text>{" "}
            En 2026, une ère prendra fin pour des millions de joueurs à travers
            le monde : la célèbre franchise de jeux vidéo FIFA, développée par
            Electronic Arts (EA), cessera d'exister sous ce nom emblématique.
            Cette nouvelle a secoué la communauté des gamers, marquant la fin
            d'une saga qui a redéfini le genre du jeu de football virtuel
            pendant plus de trois décennies.{"\n\n"}
            <Text className="font-bold">Un Historique Glorieux</Text>
            {"\n"}
            Lancée en 1993, la série FIFA a rapidement conquis le cœur des
            amateurs de football grâce à son réalisme, sa jouabilité intuitive
            et ses mises à jour annuelles reflétant les changements dans le
            monde réel du football. Chaque année, les fans attendaient avec
            impatience la sortie du nouveau volet, avec des améliorations
            graphiques, des fonctionnalités innovantes et des mises à jour de la
            base de données des joueurs et des équipes. La série a aussi été
            pionnière dans l'introduction des licences officielles de la FIFA,
            offrant aux joueurs la possibilité de jouer avec des équipes et des
            joueurs réels, dans des stades authentiques. Cela a distingué FIFA
            de ses concurrents, notamment la série Pro Evolution Soccer (PES) de
            Konami, qui peinait à obtenir des licences officielles.{"\n\n"}
            <Text className="font-bold">Les Raisons de la Fin</Text>
            {"\n"}
            La fin de la franchise FIFA est principalement due à l'expiration du
            partenariat entre EA et la Fédération Internationale de Football
            Association (FIFA). Des différends financiers auraient émergé lors
            des négociations pour renouveler l'accord, la FIFA exigeant une
            augmentation substantielle des frais de licence. EA, de son côté, a
            jugé cette demande excessive, surtout dans un contexte où les jeux
            free-to-play et les microtransactions modifient le paysage
            économique du jeu vidéo. Par ailleurs, EA a exprimé le désir
            d'étendre son influence au-delà des simples simulations de football,
            en explorant d'autres facettes de la culture footballistique
            mondiale, ce qui aurait été limité par les restrictions de la
            licence FIFA.{"\n\n"}
            <Text className="font-bold">Un Nouvel Horizon</Text>
            {"\n"}
            Cependant, la fin de la marque FIFA ne signifie pas la fin des jeux
            de football d'EA. La société a annoncé qu'elle continuerait à
            développer des jeux de football sous une nouvelle bannière, encore
            inconnue à ce jour. Cette transition marque une opportunité pour EA
            de réinventer son approche, d'introduire de nouvelles
            fonctionnalités et de répondre aux attentes croissantes des joueurs
            modernes. Les fans peuvent s'attendre à des innovations
            significatives, tant sur le plan du gameplay que des modes de jeu.
            EA pourrait exploiter davantage les technologies émergentes telles
            que la réalité virtuelle (VR), l'intelligence artificielle (IA)
            avancée et l'intégration plus profonde des plateformes de streaming.
            {"\n\n"}
            <Text className="font-bold">L'Héritage de FIFA</Text>
            {"\n"}
            En rétrospective, la série FIFA laisse un héritage indélébile. Elle
            a influencé des générations de joueurs, en créant des souvenirs et
            en rassemblant une communauté mondiale autour d'une passion commune.
            Les tournois eSports, les championnats en ligne et les modes de jeu
            tels que FIFA Ultimate Team ont révolutionné la manière dont les
            gens jouent et interagissent avec les jeux de football.{"\n\n"}
            <Text className="font-bold">Conclusion</Text>
            {"\n"}
            La fin de FIFA en 2026 marque la fin d'une époque, mais ouvre
            également la porte à un futur plein de potentialités et
            d'innovations. Les fans de football et de jeux vidéo attendent avec
            impatience de découvrir ce que l'avenir réserve, alors qu'EA
            s'apprête à écrire un nouveau chapitre dans l'histoire des jeux de
            football.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Article;
