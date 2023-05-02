<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:mei="http://www.music-encoding.org/ns/mei" xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl" exclude-result-prefixes="xs xd" version="2.0">
	<xd:doc scope="stylesheet">
		<xd:desc>
			<xd:p>
				<xd:b>Created on:</xd:b> May 2, 2018</xd:p>
			<xd:p>
				<xd:b>Author:</xd:b> Oleksii Sapov</xd:p>
			<xd:p/>
			
		</xd:desc>
	</xd:doc>
	<!--Voice: '1:soparanp', '2:basset', '3:compare'-->
	<xsl:param name="voice">3</xsl:param>
	
	
	<xsl:variable name="different_notes" select="mei:note[not(@corresp)]"/>

	<xd:doc>
		<xd:desc/>
	</xd:doc>
	<xsl:template match="/">
		<xsl:apply-templates/>
	</xsl:template>
	
	<xd:doc>
		<xd:desc>Deletes all staves and their staffDeffs which are not clarinets</xd:desc>
	</xd:doc>
	<xsl:template match="mei:music//mei:staff [(@n = 1) or (@n = 2) or (@n = 3) or (@n = 6) or (@n = 7) or (@n = 8) or (@n = 9)]"/>

	<xd:doc>
		<xd:desc>Deletes all staffDefs and their staffDeffs which are not clarinets. Note: The Xpath (mei:staff | mei:staffDef)  didn't work</xd:desc>
	</xd:doc>
	<xsl:template match="mei:music// mei:staffDef[(@n = 1) or (@n = 2) or (@n = 3) or (@n = 6) or (@n = 7) or (@n = 8) or (@n = 9)]"/>

	<xd:doc>
		<xd:desc>If voice is '2' i.e. the basset should be displayed, the sop</xd:desc>
	</xd:doc>
	<xsl:template match="mei:music//mei:staff[@n = '4']">
		<xsl:choose>
			<xsl:when test="$voice = 2"/>
			<xsl:otherwise>
				<xsl:copy>
					<xsl:apply-templates select="node() | @*"/>
				</xsl:copy>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xd:doc>
		<xd:desc>If voice is '3' i.e. the soprano should be displayed, the sop</xd:desc>
	</xd:doc>
	<xsl:template match="mei:music//mei:staff[@n = '5']">
		<xsl:choose>
			<xsl:when test="$voice = 1"/>
			<xsl:otherwise>
				<xsl:copy>
					<xsl:apply-templates select="node() | @*"/>
				</xsl:copy>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>


	<xd:doc>
		<xd:desc>Adds orange color to the different notes</xd:desc>
	</xd:doc>
	<xsl:template match="
			mei:music//mei:staff[@n = '4']//mei:note[not(@corresp)] |
			mei:music//mei:staff[@n = '4']//mei:beam[not(mei:note[@corresp]) and not(mei:note[@label = 'diff_clef'])]">
		<xsl:choose>
			<xsl:when test="$voice = 3">
				<xsl:variable name="localName" select="local-name()"/>

				<xsl:element xmlns="http://www.music-encoding.org/ns/mei" name="{$localName}">

					<xsl:if test=".[@staff]">
						<xsl:attribute name="staff" select="'4'"/>
					</xsl:if>

					<xsl:if test=".[@startid]">
						<xsl:attribute name="startid" select="@startid"/>
					</xsl:if>

					<xsl:if test=".[@endid]">
						<xsl:attribute name="endid" select="@endid"/>
					</xsl:if>

					<xsl:if test=".[@curvedir]">
						<xsl:attribute name="curvedir" select="@curvedir"/>
					</xsl:if>

					<xsl:if test=".[@place]">
						<xsl:attribute name="place" select="@place"/>
					</xsl:if>

					<xsl:if test=".[@tstamp]">
						<xsl:attribute name="tstamp" select="@tstamp"/>
					</xsl:if>

					<xsl:if test=".[@tstamp2]">
						<xsl:attribute name="tstamp2" select="@tstamp2"/>
					</xsl:if>

					<xsl:if test=".[@label]">
						<xsl:attribute name="label" select="@label"/>
					</xsl:if>

					<xsl:attribute name="color" select="'#ff9900'"/>

					<xsl:apply-templates select="@* except (@staff, @startid, @endid, @curvedir, @place, @tstamp, @tstamp2, @label, @color), node()"/>
				</xsl:element>
			</xsl:when>
			<xsl:otherwise>
				<xsl:copy>
					<xsl:apply-templates select="node() | @*"/>
				</xsl:copy>
			</xsl:otherwise>
		</xsl:choose>

	</xsl:template>

	<xd:doc>
		<xd:desc>Deletes the first tutti section</xd:desc>
	</xd:doc>
	<xsl:template match="mei:measure[(@n &lt; 48) or ((@n &gt; 228) and  ( @n &lt; 242))]"/>
	<xsl:template match="mei:meiHead"/>
	
	<xd:doc>
		<xd:desc>Changes the @n of the measure 48 to one. Neccessary for proper displaying.</xd:desc>
	</xd:doc>
	<xsl:template match="mei:measure/@n[. = 48]">
		<xsl:attribute name="n" select="1"/>
	</xsl:template>

	<xd:doc>
		<xd:desc>Replaces layers of the first tutti in the clarinet parts by multiRest</xd:desc>
	</xd:doc>
	<xsl:template match="mei:measure[@n = 48]//mei:staff[(@n = 4) or (@n = 5)]//mei:layer">
		<xsl:copy>
			<multiRest num="47"/>
		</xsl:copy>
	</xsl:template>
	
	<xd:doc>
		<xd:desc>Replaces layers of the second tutti section in the clarinet parts by multiRest</xd:desc>
	</xd:doc>
	<xsl:template match="mei:measure[@n = 242]//mei:staff[(@n = 4) or (@n = 5)]//mei:layer">
		<xsl:copy>
			<multiRest num="11"/>
		</xsl:copy>
	</xsl:template>
	
	<xd:doc>
		<xd:desc/>
	</xd:doc>
	<xsl:template match="node() | @*">
		<xsl:copy>
			<xsl:apply-templates select="node() | @*"/>
		</xsl:copy>
	</xsl:template>

	<xsl:output method="xml" indent="yes"/>
	<xsl:strip-space elements="*"/>
</xsl:stylesheet>
